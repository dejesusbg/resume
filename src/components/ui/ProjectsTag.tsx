export const ProjectsCardTag = ({ name }: { name: string }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full text-blush px-3 py-1 text-xs font-medium leading-5 bg-berry/20 ">
        {name}
      </div>
    </li>
  );
};

export const ProjectsTableTag = ({ name }: { name: string }) => {
  return (
    <li className="my-1 mr-1.5">
      <div className="flex items-center rounded-full text-blush px-3 py-1 text-xs font-medium leading-5 bg-berry/20 ">
        {name}
      </div>
    </li>
  );
};
