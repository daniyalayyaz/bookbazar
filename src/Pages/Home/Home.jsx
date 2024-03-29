import React from "react";
import UerServices from "../../services/UserServices";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [book, setBook] = React.useState([]);
  React.useEffect(() => {
    UerServices.bookstore().then((val) => {
      setBook(val.Book);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div class="scroll">
      <div class="header">
        <div class="headercard">
          <div class="iconrow">
            <div>
              <button class="btn iconbtn">
                {" "}
                <i class="far fa-angle-left icon"></i>
              </button>
            </div>
            <div>
              <button class="btn iconbtn">
                <i class="far fa-bell icon"></i>
              </button>
              <button class="btn iconbtn">
                <i class="far fa-shopping-cart icon"></i>
              </button>
              <button class="btn iconbtn">
                <i class="far fa-user-circle icon"></i>
              </button>
            </div>
          </div>
          <h1 class="headertitle">BOOKBAZAR</h1>
          <h3 class="headersubtitle">Urdu Bazar in Your Hands</h3>
        </div>
      </div>
      <div class="search-container">
        <div>
          <i class="far fa-search searchicon"></i>
          <input
            type="text"
            class="searchbar"
            placeholder="Search for book or store"
            name="search"
          />
        </div>
        <div>
          <button type="submit" class="searchbtn">
            <i class="far fa-filter searchicon"></i>
          </button>
        </div>
      </div>
      <div class="body">
        <div class="sellingmaintitlerow">
          <h1>Popular Book Store</h1>
          <button type="button" class="Showmore">
            Show more
          </button>
        </div>
        <div class="cardsrow" onClick={()=>navigate("/BookPage")} style={{cursor:"pointer"}}>
          {book.length > 0 &&
            book.map((val) => (
              <div class="card">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/001/263/879/small/books-globe-and-clock-on-shelves.jpg"
                  alt="Avatar"
                  style={{ width: "100%", borderTopRightRadius: "30px" }}
                />
                <div class="container">
                  <h4>{val.title}</h4>
                  <p>{val.description}</p>
                  <div class="cardrating">
                    <h5>Rating</h5>
                    <i class="far fa-star-half-alt searchicon"></i>
                    <h5>({val.rating})</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <hr class="hr" />
      </div>
      <div class="body">
        <div class="sellingmaintitlerow">
          <h1>Most Selling Books</h1>
          <button type="button" class="Showmore">
            Show more
          </button>
        </div>
        <div class="cardsrow" onClick={()=>navigate("/StorePage")} style={{cursor:"pointer"}}>
          {book.length > 0 &&
            book.map((val) => (
              <div class="sellingcard">
                <div class="sellingcardrow">
                  <div style={{ width: "30%" }}>
                    <img
                      src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/attachment_125401341-e1638892110107.jpeg?auto=format&q=60&fit=max&w=930"
                      alt="Avatar"
                      style={{
                        width: "70px",
                        height: "100px",
                        padding: "20px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div class="sellingcontainer">
                    <h4>{val.title}</h4>
                    <p>{val.auther}</p>
                    <div class="cardrating">
                      <h5>{val.auther}</h5>
                      <h5>Price</h5>
                      <h5>{val.Price} PKR</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
