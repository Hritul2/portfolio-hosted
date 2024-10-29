// components/TimelineItem.tsx
import { ExternalLink } from "lucide-react";

const TimelineItem = ({
  year,
  isLast,
  isActive,
  title,
  description,
  tags,
  link,
}: {
  year: string;
  isLast: boolean;
  isActive: boolean;
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => (
  <div className="flex items-start">
    <div className="relative mr-3 flex flex-col items-center">
      <div className="relative">
        <div
          className={`h-4 w-4 rounded-full border-2 ${
            isActive
              ? "border-rose-500 dark:border-rose-600"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        <div
          className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full ${
            isActive
              ? "bg-rose-500 dark:bg-rose-600"
              : "bg-gray-300 dark:bg-gray-600"
          }`}
        />
      </div>
      {!isLast && (
        <div
          className={`-my-[1px] h-20 w-0.5 ${
            isActive
              ? "bg-rose-500/50 dark:bg-rose-600/50"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        />
      )}
    </div>
    <div className="mb-6 pt-1">
      <span className="mb-1 block text-sm font-medium text-muted-foreground">
        {year}
      </span>
      {title && (
        <h3 className="mb-2 text-base font-semibold md:text-lg">{title}</h3>
      )}
      {description && (
        <p className="mb-2 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {tags && (
        <div className="mb-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs text-rose-500 dark:bg-rose-600/10 dark:text-rose-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-rose-500 hover:text-rose-600 dark:text-rose-600 dark:hover:text-rose-500"
        >
          View Project <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
      )}
    </div>
  </div>
);

export default TimelineItem;
