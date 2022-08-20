import React, { useContext, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { RobinhoodContext } from '../context/robinhoodContext'

const styles = {
  container: 'flex w-screen h-16 bg-white px-24 py-3 mb-5 fixed',
  leftHeader: 'flex flex-1 items-center justify-start',
  searchWrapper: 'flex flex-1',
  searchInputContainer:
    'text-gray items-center flex flex-1 -ml-40 border border-gray-400 mr-64 p-3 rounded-lg',
  searchIcon: 'text-gray-400 text-3xl mr-3',
  searchInputWrapper: 'text-gray-400 text-lg w-full',
  searchInput: 'bg-transparent outline-none w-full',
  rightHeader: 'flex items-center justify-end text-white gap-8',
  menuItem: 'cursor-pointer text-black font-bold hover:text-yellow-500 duration-300',
}

const Header = () => {

  const {
    connectWallet,
    signOut,
    currentAccount,
    isAuthenticated,
    formattedAccount
  } = useContext(RobinhoodContext)

  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <h1 className={styles.menuItem}>GROW_THE_X</h1>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <AiOutlineSearch className={styles.searchIcon} />
          <div className={styles.searchInputWrapper}>
            <input placeholder='Search...' className={styles.searchInput} />
          </div>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.menuItem}>Portfolio</div>
        {isAuthenticated && (
          <>
            <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => signOut()}>
              Logout
            </div>
          </>
        )}

        {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connectWallet()}>
            Login
          </div>
        )}
      </div>
    </div>
  )
}

export default Header