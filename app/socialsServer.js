
// app/SocialsNavServer.js
import SocialsNav from '@/components/social/SocialsNav';

const SocialsNavServer = async () => {
  const res = await fetch('http://localhost:3000/api/v2/links');
  const socialLinks = await res.json();

  return <SocialsNav socialLinks={socialLinks} />;
};

export default SocialsNavServer;
