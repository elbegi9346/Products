import logo from './logo.svg';
import './App.css';
import Products from './product';

const data = [
  {id: 1, img:'https://www.pikpng.com/pngl/m/244-2444287_1100-x-904-12-0-apples-white-background.png',
   title: 'Apple', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 2, img:'https://previews.123rf.com/images/yasonya/yasonya1106/yasonya110600013/9795130-apricot-fruits-with-green-leaf-and-cut-isolated-on-white-background.jpg',
   title: 'Apricos', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 3, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwyho6yokvPKtP8ueiQ68AH9Z7BgQOh3orCGaMu9zXEQDVdY&s',
   title: 'Kiwi', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 4, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfe69Jn0-bUJMR0iS2j6IoQJGWBJ8B_Nd4f0cdemWjEB3YyL0&s',
   title: 'Banana', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEHv0TnAZBaEFTNowq3bjbM5EYXvgsLKSsrNw_LW5U1pI8Ok&s',
   title: 'Pineapple', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 6, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHb73qeI-qsTwE6gq3MF6rE2OZqt0d7PSvREW-5ciZpsGFQ1s&s',
   title: 'Cherry', uom: '02', size: '02', unit: '$8.99', total: '$0.00'},
  {id: 7, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK8I6RJxaCnkePdgCP8xhlqvHVJ2x1OTYEWisM5IWSehWNPw&s',
   title: 'Cucumber', uom: '02', size: '02', unit: '$8.99', total: '$0.00'}
  
]

function App() {
  return (
    <div className="container">
      {
        data.map((value, index)=>{
          return(
            <div>
              <Products data={value}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
