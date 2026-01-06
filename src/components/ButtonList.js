import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "News",
  "Music",
  "Cricket",
  "Jobs",
  "Movies",
  "Comedy",
  "Web Development",
  "Watched",
  "FIFA",
  "Bikes",
  "Kabaddi",
  "Chess",
  "Shopping",
  "Mixes",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex gap-1 sm:gap-0 overflow-x-auto scrollbar-hide px-1 sm:px-0">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
