export function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-bang text-sm tracking-[0.28em] text-gold uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl uppercase leading-none text-white sm:text-6xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-pretty text-chrome/75">{body}</p> : null}
    </div>
  );
}
