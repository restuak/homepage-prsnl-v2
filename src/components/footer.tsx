
export default function Footer(){
    return (
      <footer className="bg-black footer sm:footer-horizontal footer-center text-base-content p-4 border-t border-t-cyan-600">
        <aside>
          <p>© {new Date().getFullYear()}</p>
          <p>Personal Homepage Restu Aka</p>
        </aside>
      </footer>
    );
}