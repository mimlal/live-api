const Product=require("../models/product")

const getAllProducts=async(req,res)=>{
    const {company,name,feature,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
        
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};  
        
    }
    let apiData=Product.find(queryObject);
    if (sort){
        let sortFix=sort.replace(",", " ");
        apiData=apiData.sort(sortFix)
    }
    if (select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix)
    }
    if(feature){
        queryObject.feature=feature
    }
    console.log(queryObject)
    
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 3;

    let skip =(page-1) * limit;

    apiData=apiData.skip(skip).limit(limit);

    const myData=await apiData;
    res.status(200).json({myData, nbHits:myData.length})
}
const getAllProductsTesting=async(req,res)=>{
    const myData=await Product.find(req.query).select("name -price").skip(2);
   
    res.status(200).json({myData,nbHits:myData.length})
    
}

module.exports={getAllProducts,getAllProductsTesting}