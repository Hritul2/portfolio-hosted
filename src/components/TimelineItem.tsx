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
    <div className="relative flex flex-col items-center mr-4">
      <div className="relative">
        <div
          className={`w-5 h-5 rounded-full border-2 ${
            isActive ? "border-primary" : "border-gray-300"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-2.5 h-2.5 rounded-full ${
              isActive ? "bg-primary" : "bg-gray-300"
            }`}
        />
      </div>
      {!isLast && (
        <div
          className={`w-0.5 h-24 -my-[1px] ${
            isActive ? "bg-primary" : "bg-gray-200"
          }`}
        />
      )}
    </div>
    <div className="pt-1 mb-8">
      <span className="block text-lg font-medium mb-1">{year}</span>
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && (
        <p className="text-muted-foreground text-sm max-w-xl mb-3">
          {description}
        </p>
      )}
      {tags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
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
          className="inline-flex items-center text-primary hover:underline"
        >
          View Project <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
    </div>
  </div>
);

export default TimelineItem;
