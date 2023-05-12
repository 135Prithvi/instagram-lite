/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true
    },
    eslint:{
        ignoreDuringBuilds:true
    },
    typescript:{
        ignoreBuildErrors:true
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/t',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
