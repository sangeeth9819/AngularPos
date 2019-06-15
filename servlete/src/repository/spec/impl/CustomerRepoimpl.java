package repository.spec.impl;

import entity.Customer;
import repository.spec.CustomerRepo;
import util.CrudUtil;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CustomerRepoimpl implements CustomerRepo {
    @Override
    public boolean add(Customer c) throws SQLException {
        return new CrudUtil().executeUpdate("INSERT INTO customer VALUES(?,?,?,?)",c.getCid(),c.getName(),c.getAddress(),c.getMobile());
    }

    @Override
    public boolean update(Customer c) throws SQLException {
        return new CrudUtil().executeUpdate("UPDATE customer SET name=?,address=?,mobile=? WHERE cid=?",c.getName(),c.getAddress(),c.getMobile(),c.getCid());
    }

    @Override
    public boolean delete(Integer cid) throws SQLException {
        return new CrudUtil().executeUpdate("DELETE FROM customer WHERE cid=?",cid);
    }

    @Override
    public Customer search(Integer cid) throws SQLException {
        ResultSet resultSet = new CrudUtil().executeQuery("SELECT * FROM customer WHERE cid=?", cid);
        if(resultSet.next()){
            Customer customer=new Customer();
            customer.setCid(cid);
            customer.setName(resultSet.getString("name"));
            customer.setAddress(resultSet.getString("address"));
            customer.setMobile(resultSet.getNString("mobile"));
            return customer;
        }
        return null;
    }

    @Override
    public List<Customer> getAll() throws SQLException {
        ResultSet resultSet = new CrudUtil().executeQuery("SELECT * FROM customer");
        ArrayList<Customer>customers=new ArrayList<>();
        while (resultSet.next()){
            Customer customer=new Customer();
            customer.setCid(resultSet.getInt("cid"));
            customer.setName(resultSet.getString("name"));
            customer.setAddress(resultSet.getString("address"));
            customer.setMobile(resultSet.getNString("mobile"));
            customers.add(customer);
        }

        return customers;
    }
}
