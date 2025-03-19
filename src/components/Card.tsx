import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

interface CardProps {
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (venueName: string, newValue: number | null) => void;
}

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      {/* Image */}
      <Image
        src={imgSrc}
        alt="img"
        width={300}
        height={200}
        className="rounded-md w-full h-[200px] object-cover"
      />

      {/* Venue Name */}
      <h2 className="text-blue-600 font-semibold text-2xl">{venueName}</h2>

      {/* Rating Component (Optional) */}
      {rating !== undefined && onRatingChange && (
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(event, newValue) => onRatingChange(venueName, newValue)}
        />
      )}
    </InteractiveCard>
  );
}
