package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Arrays;

public class DBConnection {

    public Connection getConnection(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            return DriverManager.getConnection("jdbc:mysql://localhost:3306/javaeetest", "root", "12345");
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException(Arrays.toString(e.getStackTrace()));
        }
    }
}
