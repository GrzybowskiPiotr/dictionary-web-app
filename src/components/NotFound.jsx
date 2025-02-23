import ICON from "/images/not-found-face.png";
export function NotFound({ data }) {
  const { title, message, resolution } = data;
  return (
    <div className="flex flex-col gap-4 items-center animate-pop">
      <img src={ICON} alt="sad_face emoji" className="w-16 h-16" />
      <h1
        data-TestId="heading"
        className="font-bold text-CustomGray-dark-200 dark:text-CustomGray-light-100"
      >
        {title}
      </h1>
      <p className="text-CustomGray-light-400 text-center">
        {message}
        {resolution}
      </p>
    </div>
  );
}
