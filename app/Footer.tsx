

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
    <div className="container mx-auto py-4 px-6">
      <div className="flex items-center justify-center">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} ConGanasMedia.com
        </span>
      </div>
    </div>
  </footer>

  )
}

export default Footer
