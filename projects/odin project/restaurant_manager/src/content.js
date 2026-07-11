export default function homePage(){
    const getelement = document.getElementById("content");
    const h2 = document.createElement("h2");
    h2.textContent = "Where Every Flavor Tells a Story";
    getelement.appendChild(h2);

    const img = document.createElement("img");
    img.classList.add("hero-image");
    img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80";
    img.alt = "Inside The Cozy Bistro";
    getelement.appendChild(img);

    const p = document.createElement("p");
    p.classList.add("tagline");
    p.textContent = "Fresh ingredients. Warm atmosphere. Unforgettable memories.";
    getelement.appendChild(p);

    const p2=document.createElement("p");
    p2.classList.add("description");
    p2.textContent = "Welcome to The Cozy Bistro, where passion meets the plate. Nestled in the heart of the city, we pride ourselves on crafting exceptional dishes made from locally sourced, seasonal ingredients. Whether you are joining us for a relaxed family dinner, a romantic evening, or a lively celebration with friends, our warm ambiance and attentive service ensure a dining experience you won't soon forget. Come for the food, stay for the memories.";
    getelement.appendChild(p2);

    const a = document.createElement("a");
    a.classList.add("cta-btn");
    a.href = "#menu";
    a.textContent = "View Our Menu";
    getelement.appendChild(a);
}