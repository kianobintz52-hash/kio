*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Inter",sans-serif;
}

body{
    background:#050816;
    color:white;
    overflow-x:hidden;
    min-height:100vh;
}

.background{
    position:fixed;
    inset:0;
    background:
    radial-gradient(circle at top,#3b82f655,transparent 40%),
    radial-gradient(circle at bottom,#8b5cf655,transparent 40%),
    linear-gradient(180deg,#060816,#0c1125);
    z-index:-2;
}

.background::after{
    content:"";
    position:absolute;
    inset:0;
    backdrop-filter:blur(60px);
}

#particles{
    position:fixed;
    inset:0;
    z-index:-1;
    pointer-events:none;
}

.top{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:30px 60px;
}

.clock span{
    font-size:42px;
    font-weight:800;
}

.clock p{
    opacity:.7;
    margin-top:5px;
}

.music{
    display:flex;
    align-items:center;
    gap:15px;
}

#musicButton{
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    cursor:pointer;
    background:#1f2937;
    color:white;
    font-size:22px;
    transition:.3s;
}

#musicButton:hover{
    background:#2563eb;
    transform:scale(1.1);
    box-shadow:0 0 25px #2563eb;
}

#volume{
    width:120px;
}

main{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px;
}

.card{
    width:700px;
    max-width:95%;
    backdrop-filter:blur(20px);
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.1);
    border-radius:35px;
    padding:50px;
    box-shadow:
    0 0 40px rgba(0,0,0,.4),
    0 0 100px rgba(37,99,235,.2);
}

.avatar{
    position:relative;
    width:150px;
    height:150px;
    margin:auto;
}

.avatar img{
    width:100%;
    height:100%;
    border-radius:50%;
    object-fit:cover;
    border:4px solid #3b82f6;
}

.glow{
    position:absolute;
    inset:-15px;
    border-radius:50%;
    background:#3b82f6;
    filter:blur(35px);
    opacity:.45;
    z-index:-1;
}

h1{
    text-align:center;
    margin-top:30px;
    font-size:42px;
    font-weight:800;
}

.badge{
    color:#4ea3ff;
}

.bio{
    text-align:center;
    opacity:.75;
    margin-top:10px;
    font-size:18px;
}

.status{
    width:max-content;
    margin:30px auto;
    padding:10px 18px;
    border-radius:999px;
    background:rgba(59,130,246,.18);
    border:1px solid rgba(59,130,246,.35);
}
