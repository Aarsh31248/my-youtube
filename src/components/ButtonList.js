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
  "New to you"
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
