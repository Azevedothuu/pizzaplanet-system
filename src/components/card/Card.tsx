import type { JSX } from 'react';
import { Typography } from '@components/typography';

type CardProps = {
  title: string;
  description: string;
  image?: string;
  Button?: JSX.Element;
};

export function Card({
  title,
  description,
  image,
  Button,
}: CardProps): JSX.Element {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg text-white p-4 shadow-lg">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}

      <Typography variant="h2" className="text-center mb-2 text-gray-800">
        {title}
      </Typography>

      <Typography variant="body1" className="text-center text-gray-800">
        {description}
      </Typography>
      {Button && <div className="mt-4 flex justify-center">{Button}</div>}
    </div>
  );
}
