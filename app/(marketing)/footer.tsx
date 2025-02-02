export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <label className="text-xs text-muted-foreground">
          This website is inspired by Duolingo but is <b>not</b> affiliated with
          or endorsed by Duolingo. It is created purely for entertainment
          purposes and developer learning. All assets and content used are free
          resources, and the website <b>does not</b> generate any commercial
          profit. The content on this site is intended to provide a fun and
          educational experience, <b>without</b> intending to mock or imitate
          Duolingo’s brand or services. All trademarks, logos, and brand names
          are the property of their respective owners.
        </label>
      </div>
    </footer>
  );
};
