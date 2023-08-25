import Banner from '@/components/banner'
import LatestNews from '@/components/latest-news'
import React from 'react'

function BlogContainer() {
  return (
    <main>
        <Banner title="Our Latest News" subtitle="Blog" image="blog-banner.jpg"/>
        <LatestNews />
    </main>
  )
}

export default BlogContainer