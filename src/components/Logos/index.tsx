import Image from 'next/image'
import styles from './styles.module.scss'

export const Logos = () => {
  return (
    <div className={styles.logos}>
      <Image
        src="/payload.svg"
        alt="Payload Logo"
        width={200}
        height={100}
        className={styles.payloadLogo}
        priority
      />
      <Image src="/crosshair.svg" alt="" width={20} height={20} />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
        className={styles.vercelLogo}
        priority
      />
    </div>
  )
}
