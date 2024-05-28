/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'thecuriousitycollective.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
