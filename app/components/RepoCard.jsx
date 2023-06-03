import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

function RepoCard({
  fullname,
  description,
  stargazersCount,
  forksCount,
  watchersCount,
  link
}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(link)} className="bg-black p-4 rounded-md shadow-md text-white h-1/3 xl:h-full flex flex-col justify-between cursor-pointer hover:bg-gray-800">
      <div>
        <h3 className="text-xl font-bold">{fullname}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="flex items-center mr-6 gap-2">
          <Image src="/icons/star-outline.svg" width={16} height={16}alt="Star" />
          <span className="text-gray-400 text-sm">{stargazersCount}</span>
        </div>
        <div className="flex items-center mr-6 gap-2">
          <Image src="/icons/git-network-outline.svg" width={16} height={16} alt="Forks" />
          <span className="text-gray-400 text-sm">{forksCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/eye-outline.svg" width={16} height={16} alt="Watchers" />
          <span className="text-gray-400 text-sm">{watchersCount}</span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
