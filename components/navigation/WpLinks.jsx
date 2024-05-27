const WpLinks = async () => {
  const res = await fetch("http://localhost:3000/api/v2/site-links");
  const navLinks = await res.json();

  return (
    <div className="flex flex-row w-full h-16 items-center justify-center gap-6 p-8 border">
    {navLinks.map((link, index) => {
        return (
            <a className="uppercase" key={index} href={link.node.url} target="_blank" rel="noopener noreferrer">{link.node.label}</a>
        )
      })}
    </div>
  );
};

export default WpLinks;
