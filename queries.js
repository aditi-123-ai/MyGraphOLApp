import { gql } from '@apollo/client';

export const GET_UPCOMING_LAUNCHES = gql`
  query {
    launchesUpcoming {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;
