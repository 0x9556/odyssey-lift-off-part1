import React from 'react'
import { gql, useQuery } from '@apollo/client'
import QueryResult from '../components/query-result'
import TrackCard from '../containers/track-card'
import { Layout } from '../components'
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
  query GetTracks{
    tracksForHome{
      id
      title
      thumbnail
      length
      modulesCount
      author{
        name
        photo
      }
    }
  }
`

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  return (
    <QueryResult loading={loading} error={error} data={data} >
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  )
}

export default Tracks
