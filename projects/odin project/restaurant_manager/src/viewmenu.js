   export default function viewmenu(){
    const getelement = document.getElementById("content");
    getelement.innerHTML=`       <div class="nav-links">
            <a href="index.html">&larr; Back to Home</a>
        </div>

        <!-- Appetizers Section -->
        <div class="menu-section">
            <h2 class="section-title">Appetizers</h2>
            
            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">Garlic Parmesan Truffle Fries</span>
                    <span class="item-price">$9</span>
                </div>
                <div class="item-description">Crispy hand-cut fries tossed in white truffle oil, grated parmesan, and fresh parsley.</div>
            </div>

            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">Heirloom Tomato Bruschetta</span>
                    <span class="item-price">$12</span>
                </div>
                <div class="item-description">Grilled artisan sourdough topped with marinated tomatoes, garlic, fresh basil, and a balsamic glaze drizzle.</div>
            </div>
        </div>

        <!-- Mains Section -->
        <div class="menu-section">
            <h2 class="section-title">Main Courses</h2>
            
            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">Pan-Seared Atlantic Salmon</span>
                    <span class="item-price">$26</span>
                </div>
                <div class="item-description">Served over a bed of creamy lemon-herb risotto with grilled asparagus.</div>
            </div>

            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">The Bistro Custom Burger</span>
                    <span class="item-price">$18</span>
                </div>
                <div class="item-description">Aged angus beef, sharp cheddar, caramelized onions, and house burger sauce on a toasted brioche bun.</div>
            </div>

            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">Wild Mushroom Fettuccine</span>
                    <span class="item-price">$21</span>
                </div>
                <div class="item-description">Fresh egg pasta tossed with gathered wild mushrooms in a rich garlic cream sauce.</div>
            </div>
        </div>

        <!-- Desserts Section -->
        <div class="menu-section">
            <h2 class="section-title">Desserts</h2>
            
            <div class="menu-item-container">
                <div class="menu-item">
                    <span class="item-name">Warm Lava Cake</span>
                    <span class="item-price">$10</span>
                </div>
                <div class="item-description">Decadent dark chocolate cake with a molten center, served with vanilla bean ice cream.</div>
            </div>
        </div>`
   }
   
        
 