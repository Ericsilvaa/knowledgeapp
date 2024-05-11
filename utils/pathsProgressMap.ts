import { paths } from './constants/paths'

export const registrationProgressMap = {
  [paths.registration.index]: 10,
  [paths.registration.landing]: 25
}

export const informationProgressMap = {
  [paths.registration.basicInformation]: 40,
  [paths.registration.address]: 45,
  [paths.registration.confirmDetails]: 55
}

export const combinedProgressMap = {
  ...registrationProgressMap,
  ...informationProgressMap
}
