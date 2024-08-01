import Image from 'next/image';
import { star, thumbnail01 } from '../../public/assets/assets';
import { TMovie } from '@/types/movie';
import { format } from 'date-fns';

export default function MovieCard({
  title,
  vote_average,
  release_date,
  poster_path,
}: TMovie) {
  return (
    <>
      <div>
        <Image
          src={`${poster_path}`}
          width={238}
          height={337}
          alt={title}
          className="rounded-md"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="line-clamp-1">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={star.src}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {format(release_date, 'yyyy')}
          </span>
        </div>
      </div>
    </>
  );
}
