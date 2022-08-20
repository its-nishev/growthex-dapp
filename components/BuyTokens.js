import React, { useContext } from 'react'

const styles = {
  inputAmount: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-transparent mt-6 text-black placeholder:text-black`,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-transparent mt-6 text-black placeholder:text-black`,
  options: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-black mt-6 text-black placeholder:text-black`,
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

const BuyTokens = () => {
  return (
    <form className={styles.formContainer}>
      <div className='flex h-full w-full flex-col items-center'>
        <select
          className={styles.select}
        >
          <option className={styles.options} value='ETH'>
            ETH
          </option>
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
        </select>
        <select
          className={styles.select}
        >
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
        </select>
        <input
          placeholder='Amount...'
          className={styles.inputAmount}
          type='text'
        />

        <button
          className={styles.noticeCTA}
          type='button'
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default BuyTokens