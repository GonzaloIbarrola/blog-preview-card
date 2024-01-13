import ProfileImage from '../images/image-avatar.webp'

export default function Profile() {
  return(
    <section className='flex gap-3 items-center'>
      <img src={ProfileImage} className='w-8' />
      <span className='font-bold text-sm'>Greg Hooper</span>
    </section>
  )
}
