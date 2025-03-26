import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuHeader } from './MenuHeader';
import { MenuSection } from './MenuSection';
import { MenuFooter } from './MenuFooter';


export const Menu = ({ language, setLanguage }) => {
  const menuData = {
    mainDishes: {
      title: { 
        es: 'PLATOS PRINCIPALES', 
        en: 'MAIN DISHES', 
        de: 'HAUPTGERICHTE' 
      },
      items: [
        {
          name: { es: 'Arroz Chino', en: 'Chinese Rice', de: 'Chinesischer Reis' },
          description: { 
            es: 'Arroz, pollo, lomo de cerdo, guisantes, zanahoria, jamón, raíces chinas, soja.', 
            en: 'Rice, chicken, pork loin, peas, carrot, ham, Chinese roots, soybeans.', 
            de: 'Reis, Hähnchen, Schweinelende, Erbsen, Karotte, Schinken, chinesische Wurzeln, Sojabohnen.' 
          },
          price: 15.00
        },
        {
          name: { es: 'Arroz con Pollo', en: 'Rice with Chicken', de: 'Reis mit Hähnchen' },
          description: { 
            es: 'Arroz, pollo, salchicha, guisantes, zanahoria, judías verdes, pimiento, cebolla, especias.', 
            en: 'Rice, chicken, sausage, peas, carrot, green beans, bell pepper, onion, spices.', 
            de: 'Reis, Hähnchen, Wurst, Erbsen, Karotte, grüne Bohnen, Paprika, Zwiebel, Gewürze.' 
          },
          price: 14.00
        },
        {
          name: { es: 'Bandeja Paisa', en: 'Paisa Platter', de: 'Paisa-Teller' },
          description: { 
            es: 'Frijoles, chicharrón, chorizo, carne mechada, arroz, arepa de maíz, huevo frito, aguacate, plátano amarillo. Solo sábados y domingos.', 
            en: 'Beans, pork rinds, chorizo, shredded meat, rice, corn arepa, fried egg, avocado, yellow banana. Only Saturdays and Sundays.', 
            de: 'Bohnen, Schweineschwarte, Chorizo, geschreddertes Fleisch, Reis, Maisarepa, Spiegelei, Avocado, Kochbanane. Nur samstags und sonntags.' 
          },
          price: 14.00
        },
        {
          name: { es: 'Sobre Barriga', en: 'Belly Meat', de: 'Bauchfleisch' },
          description: { 
            es: 'Carne de sobre barriga, arroz, ensalada de lechuga, tomate, cebolla, plátano amarillo. Solo sábados y domingos.', 
            en: 'Belly meat, rice, lettuce salad, tomato, onion, yellow banana. Only Saturdays and Sundays.', 
            de: 'Bauchfleisch, Reis, Salat mit Tomate und Zwiebel, Kochbanane. Nur samstags und sonntags.' 
          },
          price: 13.00
        },
        {
          name: { es: 'Carne a la Plancha', en: 'Grilled Meat', de: 'Gegrilltes Fleisch' },
          description: { 
            es: 'Carne asada, ensalada de lechuga, tomate, cebolla, patatas fritas.', 
            en: 'Roast beef, lettuce salad, tomato, onion, chips.', 
            de: 'Gebratenes Rindfleisch, Salat mit Tomate und Zwiebel, Pommes.' 
          },
          price: 12.00
        },
        {
          name: { es: 'Dorada Frita', en: 'Fried Fish', de: 'Gebratener Fisch' },
          description: { 
            es: 'Dorada frita, patacones, arroz, ensalada.', 
            en: 'Fried sea bream, patacones, rice, salad.', 
            de: 'Gebratene Goldbrasse, Patacones, Reis, Salat.' 
          },
          price: 16.00
        },
        {
          name: { es: 'Sancocho', en: 'Soup', de: 'Eintopf' },
          description: { 
            es: 'Sancocho de pollo y cerdo, plátano verde, mazorca, yuca, papa y especias, acompañado de arroz y ensalada. Solo domingos.', 
            en: 'Chicken and pork soup, green plantain, cob, cassava, potato and spices, served with rice and salad. Sundays only.', 
            de: 'Hähnchen-Schweine-Eintopf, Kochbanane, Maiskolben, Maniok, Kartoffeln, Gewürze, mit Reis und Salat. Nur sonntags.' 
          },
          price: 12.00
        },
        {
          name: { es: 'Costillas de Cerdo', en: 'Pork Ribs', de: 'Schweinerippchen' },
          description: { 
            es: 'Costillas de cerdo con papas fritas.', 
            en: 'Pork ribs with fries.', 
            de: 'Schweinerippchen mit Pommes.' 
          },
          price: 10.00
        },
        {
          name: { es: 'Alitas de Pollo', en: 'Chicken Wings', de: 'Hähnchenflügel' },
          description: { 
            es: 'Alitas de pollo con papas fritas o patacón.', 
            en: 'Chicken wings with french fries or patacón.', 
            de: 'Hähnchenflügel mit Pommes oder Patacón.' 
          },
          price: 8.00
        }
      ]
    },
    mixedPlatters: {
      title: { es: 'PICADAS', en: 'MIXED PLATTERS', de: 'GEMISCHTE PLATTEN' },
      items: [
        {
          name: { es: 'Picada Mixta Pequeña', en: 'Small Mixed Picada', de: 'Kleine Gemischte Platte' },
          price: 16.00,
          description: { 
            es: 'Costilla de cerdo, lomo de cerdo, bofe, chicharrón, chorizo, patacones, arepa, empanadas, papa frita, tomate, limón.', 
            en: 'Pork rib, pork loin, bofe, chicharron, chorizo, patacon, corn arepa, empanadas, fries, tomato, lemon.', 
            de: 'Schweinerippchen, Schweinelende, Lunge, Schweineschwarte, Chorizo, Patacones, Maisarepa, Empanadas, Pommes, Tomate, Zitrone.' 
          }
        },
        {
          name: { es: 'Picada Mixta Grande', en: 'Big Mixed Picada', de: 'Große Gemischte Platte' },
          price: 35.00,
          description: { 
            es: 'Costilla de cerdo, lomo de cerdo, bofe, chicharrón, chorizo, patacones, arepa, empanadas, papa frita, tomate, limón.', 
            en: 'Pork rib, pork loin, bofe, chicharron, chorizo, patacon, corn arepa, empanadas, fries, tomato, lemon.', 
            de: 'Schweinerippchen, Schweinelende, Lunge, Schweineschwarte, Chorizo, Patacones, Maisarepa, Empanadas, Pommes, Tomate, Zitrone.' 
          }
        },
        {
          name: { es: 'Salchipapa', en: 'Sausage and Fries', de: 'Wurst mit Pommes' },
          description: { 
            es: 'Papas fritas y salchichas.', 
            en: 'French fries and sausages.', 
            de: 'Pommes und Würstchen.' 
          },
          price: 6.00
        },
        {
          name: { es: 'Empanadas', en: 'Empanadas', de: 'Empanadas' },
          description: { 
            es: 'Relleno de carne, papa y harina. Raciones de 5 en adelante.', 
            en: 'Filled with meat, potato and flour. Portions of 5 or more.', 
            de: 'Gefüllt mit Fleisch, Kartoffeln und Mehl. Portionen ab 5 Stück.' 
          },
          price: 1.00
        },
        {
          name: { es: 'Chicharrón con Patacón', en: 'Pork Rinds with Patacon', de: 'Schweineschwarte mit Patacones' },
          price: 8.00
        },
        {
          name: { es: 'Chicharrón con Arepa', en: 'Pork Rinds with Arepa', de: 'Schweineschwarte mit Arepa' },
          price: 7.00
        }
      ]
    },
    sides: {
      title: { es: 'ACOMPAÑAMIENTOS', en: 'SIDES', de: 'BEILAGEN' },
      items: [
        { name: { es: 'Arepa', en: 'Arepa', de: 'Arepa' }, price: 3.00 },
        { name: { es: 'Porción de Patacones', en: 'Patacones Portion', de: 'Patacones-Portion' }, price: 4.00 },
        { name: { es: 'Porción de Arroz', en: 'Rice Portion', de: 'Reisportion' }, price: 1.00 },
        { name: { es: 'Porción de Papas Fritas', en: 'French Fries Portion', de: 'Pommes-Portion' }, price: 3.00 }
      ]
    },
    drinks: {
      title: { es: 'BEBIDAS', en: 'DRINKS', de: 'GETRÄNKE' },
      items: [
        { name: { es: 'Gaseosa Personal Postobón', en: 'Postobón Soda (Personal)', de: 'Postobón-Limonade (Einzel)' }, price: 2.50 },
        { name: { es: 'Gaseosa de Litro Postobón', en: 'Postobón Soda (1L)', de: 'Postobón-Limonade (1L)' }, price: 5.00 },
        { name: { es: 'Coca-Cola Pequeña', en: 'Small Coca-Cola', de: 'Kleine Coca-Cola' }, price: 2.00 },
        { name: { es: 'Coca-Cola en Lata', en: 'Coca-Cola (Can)', de: 'Coca-Cola (Dose)' }, price: 2.00 },
        { name: { es: 'Nestea', en: 'Nestea', de: 'Nestea' }, price: 2.50 },
        { name: { es: 'Aquarius', en: 'Aquarius', de: 'Aquarius' }, price: 2.50 },
        { name: { es: 'Pony Malta', en: 'Pony Malta', de: 'Pony Malta' }, price: 2.50 },
        { name: { es: 'Cerveza Estrella Damm', en: 'Estrella Damm Beer', de: 'Estrella Damm Bier' }, price: 2.20 },
        { name: { es: 'Cerveza Estrella Galicia', en: 'Estrella Galicia Beer', de: 'Estrella Galicia Bier' }, price: 2.20 },
        { name: { es: 'Cerveza Corona', en: 'Corona Beer', de: 'Corona Bier' }, price: 2.50 },
        { name: { es: 'Cerveza Heineken', en: 'Heineken Beer', de: 'Heineken Bier' }, price: 2.50 },
        { name: { es: 'Shandy', en: 'Shandy', de: 'Shandy' }, price: 2.50 },
        { name: { es: 'Caña', en: 'Draught Beer', de: 'Fassbier' }, price: 2.00 },
        { name: { es: 'Cerveza sin Alcohol', en: 'Non-Alcoholic Beer', de: 'Alkoholfreies Bier' }, price: 2.50 }
      ]
    },
    cocktails: {
      title: { es: 'TRAGOS', en: 'COCKTAILS', de: 'COCKTAILS' },
      items: [
        { name: { es: 'Johnnie Walker Negro', en: 'Johnnie Walker Black', de: 'Johnnie Walker Black' }, price: 7.00 },
        { name: { es: 'Johnnie Walker Rojo', en: 'Johnnie Walker Red', de: 'Johnnie Walker Red' }, price: 7.00 },
        { name: { es: 'Beefeater', en: 'Beefeater', de: 'Beefeater' }, price: 6.00 },
        { name: { es: 'Tanqueray', en: 'Tanqueray', de: 'Tanqueray' }, price: 7.00 },
        { name: { es: 'Barceló', en: 'Barceló', de: 'Barceló' }, price: 6.00 },
        { name: { es: 'Jack Daniel\'s', en: 'Jack Daniel\'s', de: 'Jack Daniel\'s' }, price: 7.00 },
        { name: { es: 'Plata o Plomo', en: 'Plata o Plomo', de: 'Plata o Plomo' }, price: 7.00 },
        { name: { es: 'Bombay', en: 'Bombay', de: 'Bombay' }, price: 7.00 },
        { name: { es: 'Puerto de Indias', en: 'Puerto de Indias', de: 'Puerto de Indias' }, price: 7.00 },
        { name: { es: 'Ron Vijo de Caldas', en: 'Ron Vijo de Caldas', de: 'Ron Vijo de Caldas' }, price: 7.00 },
        { name: { es: 'Havana', en: 'Havana', de: 'Havana' }, price: 7.00 },
        { name: { es: 'Jose Cuervo', en: 'Jose Cuervo', de: 'Jose Cuervo' }, price: 7.00 }
      ]
    },
    shots: {
      title: { es: 'CHUPITOS', en: 'SHOTS', de: 'SCHÜSSE' },
      items: [
        { name: { es: 'Aguardiente', en: 'Aguardiente', de: 'Aguardiente' }, price: 2.00 },
        { name: { es: 'Hierbas Dulces', en: 'Sweet Herbs', de: 'Süße Kräuter' }, price: 2.00 },
        { name: { es: 'Hierbas Mezcladas', en: 'Mixed Herbs', de: 'Gemischte Kräuter' }, price: 2.00 },
        { name: { es: 'Hierbas Secas', en: 'Dry Herbs', de: 'Trockene Kräuter' }, price: 2.00 },
        { name: { es: 'Vino Tinto (Copa)', en: 'Red Wine (Glass)', de: 'Rotwein (Glas)' }, price: 3.00 },
        { name: { es: 'Vino Blanco (Copa)', en: 'White Wine (Glass)', de: 'Weißwein (Glas)' }, price: 3.00 },
        { name: { es: 'Botella de Vino Tinto', en: 'Red Wine (Bottle)', de: 'Rotwein (Flasche)' }, price: 12.00 },
        { name: { es: 'Botella de Vino Blanco', en: 'White Wine (Bottle)', de: 'Weißwein (Flasche)' }, price: 12.00 }
      ]
    }
  };

  // Helper para obtener texto según el idioma
  const getText = (textObj) => textObj[language] || textObj['es'];

  return (
    <div className="fixed-background">
      <div className="menu-container">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
        <div className="max-w-4xl mx-auto px-4 py-20 text-white">
          <MenuHeader language={language} />
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna Izquierda */}
            <div className="space-y-14">
              <MenuSection 
                title={getText(menuData.mainDishes.title)} 
                items={menuData.mainDishes.items.map(item => ({
                  name: getText(item.name),
                  description: item.description ? getText(item.description) : null,
                  price: item.price
                }))} 
              />
              <MenuSection 
                title={getText(menuData.mixedPlatters.title)} 
                items={menuData.mixedPlatters.items.map(item => ({
                  name: getText(item.name),
                  description: item.description ? getText(item.description) : null,
                  price: item.price
                }))} 
              />
            </div>

            {/* Columna Derecha */}
            <div className="space-y-14">
              <MenuSection 
                title={getText(menuData.sides.title)} 
                items={menuData.sides.items.map(item => ({
                  name: getText(item.name),
                  price: item.price
                }))} 
              />
              <MenuSection 
                title={getText(menuData.drinks.title)} 
                items={menuData.drinks.items.map(item => ({
                  name: getText(item.name),
                  price: item.price
                }))} 
              />
              <MenuSection 
                title={getText(menuData.cocktails.title)} 
                items={menuData.cocktails.items.map(item => ({
                  name: getText(item.name),
                  price: item.price
                }))} 
              />
              <MenuSection 
                title={getText(menuData.shots.title)} 
                items={menuData.shots.items.map(item => ({
                  name: getText(item.name),
                  price: item.price
                }))} 
              />
            </div>
          </div>
          
          <MenuFooter language={language} />
        </div>
      </div>
    </div>
  );
};