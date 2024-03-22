// pages/api/hello.js
// 別サーバーにリクエストをわかりやすくするためpythonでサーバーでたてる。
// 
export default function handler(req, res) {
    res.status(200).json({ message: 'hello world' })
  }