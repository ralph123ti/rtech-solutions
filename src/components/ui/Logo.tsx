export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
      aria-label="RTech Solutions home"
    >
      <img
        src="/logo.png"
        alt="RTech Solutions logo"
        className="h-10 w-10 rounded-full object-contain"
      />
      <span className="leading-tight">
        <span className="block text-base font-semibold text-white">
          RTech <span className="text-neon">Solutions</span>
        </span>
        <span className="block text-[10px] text-muted">
          Software · AI · Digital Marketing
        </span>
      </span>
    </a>
  )
}