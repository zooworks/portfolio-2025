export default function Contact() {
  return (
    <>
      <div className="px-6 py-10 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6 text-gray-600">
          포트폴리오를 봐주셔서 감사합니다.  
          아래 메일로 연락주시면 빠르게 답변드릴게요 😊
        </p>

        <div className="text-lg font-medium">
          <p className="mb-2">
            ✉️ Email: <a href="mailto:your.email@example.com" className="text-blue-600 underline">your.email@example.com</a>
          </p>
          <p className="mb-2">
            💼 LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 underline">/yourprofile</a>
          </p>
          <p>
            🧑🏻‍💻 GitHub: <a href="https://github.com/yourgithub" target="_blank" className="text-blue-600 underline">github.com/yourgithub</a>
          </p>
        </div>
      </div>
    </>
  );
}
