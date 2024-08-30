import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=" my-7 p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://i.pinimg.com/564x/37/66/0f/37660f5694e9e19c66ed35a315f96390.jpg" alt="" />
            <div className="ml-5 space-y-2">
              <p className="">Girl Dress</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Pink</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
            <p>$687</p>
        </Grid>
        <Grid item xs={4}>
           {true && <div>
            <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                <span>
                    Delivered On Juny 07
                </span>
            </p>
            <p className="text-xs">Your item has been delivered</p>
            </div>
           }
            {false && <p>
                <span>
                    Exected Delivery On July 08
                </span>
            </p>}

        </Grid>
      </Grid>
    </div>
  );
};
export default OrderCard