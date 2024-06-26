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
        {
            protocol: 'https',
            hostname: 'secure.gravatar.com',
            port: '',
            pathname: '/**',
        }
      ],
    },
};

export default nextConfig;
