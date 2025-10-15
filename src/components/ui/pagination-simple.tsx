import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "../icons";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={`mx-auto flex w-full justify-center ${className || ""}`}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={`flex flex-row items-center gap-1 ${className || ""}`}
      {...props}
    />
  );
}

function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={className} {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  size?: "default" | "icon";
} & React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const activeStyles = isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground";
  const sizeStyles = size === "default" ? "h-9 px-4 py-2" : "h-9 w-9";

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={`${baseStyles} ${activeStyles} ${sizeStyles} ${className || ""}`}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={`gap-1 pl-2.5 caption ${className || ""}`}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={`gap-1 pr-2.5 caption ${className || ""}`}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 items-center justify-center ${className || ""}`}
      {...props}
    >
      <MoreHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
