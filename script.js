const script = document.createElement("script");

script.src =
"https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/SiteAssets/quick-links/quick-links-data.js?v=" +
Date.now();

script.onload = () => {

    const app = document.getElementById("links");

    const data =
        [...(window.quickLinksData || [])]
        .sort((a,b)=>a.sortOrder-b.sortOrder);

    app.innerHTML="";

    data.forEach(item=>{

        const el = document.createElement("a");

        el.className="link";
        el.href=item.link;
        el.target="_blank";

        el.innerHTML=`
            <div class="left">
                <i data-lucide="${item.icon}"></i>
                <span>${item.title}</span>
            </div>

            <div class="arrow">
                <i data-lucide="chevron-right"></i>
            </div>
        `;

        app.appendChild(el);

    });

    lucide.createIcons();

};

script.onerror=()=>{
    console.error("quick-links-data.js の読み込みに失敗しました");
};

document.head.appendChild(script);
