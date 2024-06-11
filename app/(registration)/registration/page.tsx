'use client'
import { Input } from '@components/Input'
import { Checkbox } from '@components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContainerLayout } from '@hooks/useContainerLayout'
import {
  emailAndPasswordSchema,
  type TEmailAndPasswordData
} from '@schemas/registrationSchema'

import { paths } from '@utils/constants/paths'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrationPage() {
  const { boxMargin } = useContainerLayout()
  console.log('🚀 ~ RegistrationPage ~ boxMargin:', boxMargin)

  // const [acceptsTermsAccepted, setAcceptsTermsAccepted] = useState(false)
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target
    // if (name === 'acceptsTerms') {
    //   setAcceptsTermsAccepted(checked as boolean)
    // }
    if (name === 'privacyPolicy') {
      setPrivacyPolicyAccepted(checked as boolean)
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TEmailAndPasswordData>({
    resolver: zodResolver(emailAndPasswordSchema)
  })

  const onsubmit = (data: TEmailAndPasswordData) => {
    console.log(data)
  }

  return (
    <div className={'flex-1 flex flex-col justify-between h-full'}>
      <div
        className={`px-${boxMargin} flex flex-col justify-center flex-1 gap-7 max-w-[60%]`}
      >
        <div className='font-semibold text-4xl font-serif'>
          <h1>Vamos Começar</h1>
        </div>
        <form onSubmit={handleSubmit(onsubmit)} className='space-y-6'>
          <div>
            <div className='grid gap-2 mb-3'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Email
              </label>
              <Input
                id='email'
                placeholder='m@example.com'
                className='rounded-md bg-transparent  text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                type='email'
                name='email'
                isLoginPage={true}
                control={control}
                errors={errors}
              />
            </div>

            <div className='grid gap-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='password'
              >
                Senha
              </label>
              <Input
                className='rounded-md bg-transparent  text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                id='password'
                type='password'
                name='password'
                autoComplete='current-password'
                isLoginPage={true}
                control={control}
                errors={errors}
              />
            </div>
          </div>

          <div className='flex items-center space-x-2 '>
            <Checkbox
              checked={privacyPolicyAccepted}
              onChange={handleCheckboxChange}
              name='privacyPolicyAccepted'
            />

            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Eu concordo com <Link href={'#'}>E-Sign Consent</Link>
            </label>
          </div>
          {/* <div>
              <Checkbox
                checked={acceptsTermsAccepted}
                onChange={handleCheckboxChange}
                name='acceptsTerms'
              />
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Eu concordo com <Link href={'#'}>E-Sign Consent</Link>
              </label>
            </div> */}
          <div className='flex-1 bg-blue-700 rounded-md'>
            <button
              type='submit'
              className='py-2 w-full text-white font-medium px-5'
            >
              Continue
            </button>
          </div>
          <div></div>
          <Link
            className='text-sm hover:cursor-pointer hover:underline'
            href={paths.login.index}
          >
            Já possuo uma conta!
          </Link>
        </form>
      </div>
    </div>
  )
}
