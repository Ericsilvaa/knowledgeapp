'use client'
import { type InputGlobalProps } from '@interfaces/InputGlobalProps'
import {
  forwardRef,
  useState,
  type ForwardedRef,
  type InputHTMLAttributes
} from 'react'

import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'
import { useController, type Control, type FieldErrors } from 'react-hook-form'

import { IMaskInput } from 'react-imask'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  control: Control<any>
  errors?: FieldErrors<InputGlobalProps>
  name: keyof InputGlobalProps
  value?: string | number | any
  mask?: any
  required?: boolean
  isLoginPage?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      value,
      label,
      type,
      placeholder,
      control,
      errors,
      mask,
      required,
      isLoginPage,
      defaultValue,
      className,
      ...rest
    }: InputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      field: { ref, ...inputProps },
      fieldState: { error }
    } = useController({
      name,
      control,
      rules: { required },
      defaultValue: defaultValue || ''
    })

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div>
        <label
          htmlFor={id}
          className={`block select-none truncate text-sm font-semibold leading-5 ${
            error ? '-top-[40%] text-[#FF0404]' : '-top-[60%] left-1'
          } ${
            isLoginPage
              ? 'text-color-light dark:text-color-light'
              : 'text-color-light dark:text-color-dark'
          }`}
        >
          {required ? (
            <>
              {label}
              <span className='text-[#FF0404]'>*</span>
            </>
          ) : (
            <>{label}</>
          )}
        </label>
        <div
          className={twMerge(
            `relative ${error ? 'rounded-md bg-[#FF0404]' : ''}`,
            className
          )}
        >
          <IMaskInput
            mask={mask}
            {...inputProps}
            {...rest}
            inputRef={ref}
            className={`focus:inset peer max-h-9 w-full appearance-none rounded-md border px-1.5 py-1.5 text-sm focus:border focus:outline-none focus:ring-1 focus:ring-inset ${
              isLoginPage &&
              'bg-secondary-light text-color-light dark:bg-secondary-light dark:text-color-light'
            } ${
              error
                ? 'invalid:border-b-1 border-[#FF0404] focus:border-[#FF0404] focus:ring-[#FF0404] dark:border-[#FF0404]'
                : 'border-[#d9d9d9] text-color-light focus:border-orange-light focus:ring-orange-600 dark:border-color-dark dark:bg-secondary-dark dark:text-color-dark dark:focus:border-orange-dark dark:focus:ring-orange-dark'
            }`}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            id={id}
            placeholder={placeholder}
          />
          {type === 'password' && (
            <>
              {showPassword ? (
                <EyeIcon
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                  className={`absolute -top-1.5 right-3.5 z-20 h-6 w-6 translate-y-2/4 cursor-pointer text-color-light ${
                    isLoginPage
                      ? 'dark:text-color-light'
                      : 'dark:text-color-dark'
                  }`}
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                  className={`absolute -top-1.5 right-3.5 z-20 h-6 w-6 translate-y-2/4 cursor-pointer text-color-light ${
                    isLoginPage
                      ? 'dark:text-color-light'
                      : 'dark:text-color-dark'
                  }`}
                />
              )}
            </>
          )}
          {error && (
            <span className='flex items-center gap-1 pb-1 pl-2 text-white'>
              <ExclamationCircleIcon className='h-6 w-6' />
              <p className='pt-1 text-xs sm:text-sm'>{error.message}</p>
            </span>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'
