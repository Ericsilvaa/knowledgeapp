'use client'
import { Input } from '@components/Input'
import { Checkbox } from '@components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  emailAndPasswordSchema,
  type TEmailAndPasswordData
} from '@schemas/registrationSchema'

import { paths } from '@utils/constants/paths'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegistrationPage() {
  const [acceptsTermsAccepted, setAcceptsTermsAccepted] = useState(false)
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target
    if (name === 'acceptsTerms') {
      setAcceptsTermsAccepted(checked as boolean)
    }
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
    <div className='flex flex-col justify-center h-full gap-7'>
      <div className='font-semibold text-4xl font-serif'>
        <h1>Vamos Começar</h1>
      </div>
      <div className='max-w-[50%]'>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className=''>
            <Input
              id='email'
              type='email'
              name='email'
              label='Email'
              autoComplete='email'
              isLoginPage={true}
              control={control}
              errors={errors}
            />

            <Input
              id='password'
              type='password'
              name='password'
              label='Senha'
              autoComplete='current-password'
              isLoginPage={true}
              control={control}
              errors={errors}
            />
          </div>
          <div>
            <Checkbox
              checked={privacyPolicyAccepted}
              onChange={handleCheckboxChange}
              name='privacyPolicyAccepted'
            >
              <span>
                Eu concordo com <Link href={'#'}>E-Sign Consent</Link>
              </span>
            </Checkbox>
            <Checkbox
              checked={acceptsTermsAccepted}
              onChange={handleCheckboxChange}
              name='acceptsTerms'
            >
              <span>
                Eu concordo com <Link href={'#'}>E-Sign Consent</Link>
              </span>
            </Checkbox>
          </div>
          <div>
            <button type='submit'>Continue</button>
          </div>
          <div>
            <Link href={paths.login.index}>Já possuo uma conta.</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
