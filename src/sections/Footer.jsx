
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center
    justify-center gap-5 pb-3 text-sm text-neutral-400 c-space">
        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-4 h-[1px] w-full"/>
        <div className="flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            <p>© 2025 QLab. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer