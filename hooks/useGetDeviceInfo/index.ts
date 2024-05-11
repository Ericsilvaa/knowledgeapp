// // import { getDeviceInfo } from '@/features/deviceInfo/deviceInfoSlice'
// import { type AxiosError } from 'axios'
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { type DeviceInfoResponse } from './types'

// interface GetDeviceInfoResponse {
//   errorMessage: string | null
//   deviceData: DeviceInfoResponse | null
//   isAndroid: boolean
//   isIos: boolean
// }

// const useGetDeviceInfo = (): GetDeviceInfoResponse => {
//   const dispatch = useDispatch<any>()

//   const [deviceData, setDeviceData] = useState<DeviceInfoResponse | null>(null)
//   const [errorMessage, setErrorMessage] = useState<string | null>(null)
//   const { bearerToken } = useSelector((state: any) => state.auth)
//   const deviceInfoState = useSelector((state: any) => state.deviceInfo)

//   useEffect(() => {
//     const handleGetDeviceInfo = async () => {
//       try {
//         if (!deviceInfoState.data) {
//           await dispatch(getDeviceInfo(bearerToken))
//         }
//         if (
//           deviceInfoState?.data &&
//           'browser' in deviceInfoState.data &&
//           'name' in deviceInfoState.data
//         ) {
//           setDeviceData(deviceInfoState.data)
//         } else {
//           setErrorMessage('Error getting device info')
//         }
//       } catch (err) {
//         const axiosError = err as AxiosError
//         if (axiosError.response) {
//           console.error('Error making GET request:', axiosError)
//           setErrorMessage('Error getting device info')
//         }
//       }
//     }
//     handleGetDeviceInfo()
//   }, [])

//   return {
//     deviceData,
//     errorMessage,
//     isAndroid: /Android/.test(deviceInfoState?.data?.useragent),
//     isIos: /iPhone|iPad|iPod/.test(deviceInfoState?.data?.useragent)
//   }
// }

// export default useGetDeviceInfo
