import { cn } from "@/lib/utils";
import { useAllCourseQuery } from "@/redux/api/baseApi";
import { TCourseItem } from "@/types/course.types";
import { DialogProps } from "@radix-ui/react-dialog";
import { FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = useState(false);
  const { data: courses } = useAllCourseQuery(undefined);

  const navigate = useNavigate();

  console.log(courses);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <Button
        variant='outline'
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className='inline-flex'>Search Course...</span>
        <kbd className='pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search which course you want...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Courses'>
            {courses?.data?.map((course: TCourseItem) => (
              <CommandItem
                value={`${course.name} ${course.instructor} ${course.location}`}
                className='my-2 cursor-pointer'
                key={course._id}
                onSelect={() => {
                  setOpen(false);
                  navigate(course._id);
                }}
              >
                <FileIcon className='mr-2 h-4 w-4' />
                {course.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
