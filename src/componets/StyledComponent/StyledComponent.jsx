/**
 * This component will be using CSS Modules
 */

import styles from './styles.module.css'

console.log(styles)

function StyledComponent(props) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Section</h1>
    </section>
  )
}

export default StyledComponent