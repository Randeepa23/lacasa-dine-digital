import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = [
    {
      category: "Appetizers",
      items: [
        { name: "Bruschetta Trio", price: "$12", description: "Classic tomato, mushroom, and olive tapenade on toasted bread" },
        { name: "Calamari Fritti", price: "$14", description: "Crispy fried calamari with lemon aioli" },
        { name: "Caprese Salad", price: "$13", description: "Fresh mozzarella, heirloom tomatoes, and basil" },
        { name: "Antipasto Platter", price: "$18", description: "Cured meats, cheeses, olives, and marinated vegetables" },
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Spaghetti Carbonara", price: "$22", description: "Classic Roman pasta with pancetta and parmesan" },
        { name: "Osso Buco", price: "$32", description: "Braised veal shanks with saffron risotto" },
        { name: "Branzino al Forno", price: "$28", description: "Whole roasted Mediterranean sea bass with herbs" },
        { name: "Bistecca alla Fiorentina", price: "$42", description: "Grilled T-bone steak with rosemary potatoes" },
        { name: "Risotto ai Funghi", price: "$24", description: "Creamy wild mushroom risotto with truffle oil" },
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Tiramisu", price: "$9", description: "Classic Italian layered dessert with espresso and mascarpone" },
        { name: "Panna Cotta", price: "$8", description: "Silky vanilla cream with berry compote" },
        { name: "Cannoli", price: "$8", description: "Crispy pastry shells filled with sweet ricotta" },
        { name: "Gelato Selection", price: "$7", description: "Three scoops of artisanal Italian gelato" },
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "House Wine", price: "$8/glass", description: "Red, white, or rosé from our curated selection" },
        { name: "Italian Coffee", price: "$4", description: "Espresso, cappuccino, or macchiato" },
        { name: "San Pellegrino", price: "$5", description: "Sparkling mineral water" },
        { name: "Fresh Lemonade", price: "$4", description: "House-made with Mediterranean lemons" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of Mediterranean delicacies, 
            made fresh daily with authentic ingredients
          </p>
        </div>

        <Tabs defaultValue="Appetizers" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto gap-2">
            {menuCategories.map((cat) => (
              <TabsTrigger 
                key={cat.category} 
                value={cat.category}
                className="text-sm md:text-base py-3"
              >
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((cat) => (
            <TabsContent key={cat.category} value={cat.category} className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-primary font-semibold text-lg">{item.price}</span>
                      </div>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
