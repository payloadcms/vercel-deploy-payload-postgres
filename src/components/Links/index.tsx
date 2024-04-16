import Link from 'next/link'
import styles from './styles.module.scss'

export const Links = () => {
  return (
    <div className={styles.links}>
      <Link href="/">
        <h6>Label</h6>
        <span>Some text</span>
      </Link>
      <Link href="/">
        <h6>Label</h6>
        <span>Some text</span>
      </Link>
      <Link href="/">
        <h6>Label</h6>
        <span>Some text</span>
      </Link>
      <Link href="/">
        <h6>Label</h6>
        <span>Some text</span>
      </Link>
    </div>
  )
}
