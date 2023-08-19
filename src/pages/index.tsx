import * as React from 'react'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import SiteLayout from '@/layouts/SiteLayout'

function StartPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SiteLayout>
      <h1>Start Page ({props.name}</h1>
    </SiteLayout>
  )
}

/**
 * @inheritDoc
 */
export function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log(`getServerSideProps() ctx:`, ctx)
  return {
    props: {
      name: 'Hello World',
    },
  }
}

export default StartPage
