<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-button type="primary">添加角色</el-button>

      <!-- 角色列表 -->
      <el-table :data="roleList" border stripe>
        <!-- 展开列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bd-bottom',i1===0?'bd-top':'']" v-for="(item1,i1) in scope.row.children" :key="item1.id">
              <!-- 一级权限 -->
              <el-col :span="5">
                <el-tag closable @close="removeRights(scope.row,item1.id)">{{item1.lable}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级权限和三级权限 -->
              <el-col :span="19">
                <!-- 渲染二级权限 -->
                <el-row :class="i2===0?'':'bd-top'" v-for="(item2,i2) in item1.children" :key="item2.id">
                  <el-col :span="5">
                    <el-tag type="success" closable @close="removeRights(scope.row,item1.id)">{{item2.lable}}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>

                  <!-- 渲染三级权限 -->
                  <el-col :span="12">
                    <el-tag v-for="(item3) in item2.children" :key="item3.id" type="warning" closable
                      @close="removeRights(scope.row,item1.id)">
                      {{item3.lable}}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index" align="center">
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称" align="center">
        </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="300">
          <template slot-scope="">
            <!-- {{scope.row}} -->
            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetRights">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 权限分配对话框 -->
      <el-dialog title="分配权限" :visible.sync="setRightsDialogVisible" width="50%">
        <!-- 树形控件 -->
        <el-tree :data="treeList" :props="treeProps"></el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setRightsDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="setRightsDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        setRightsDialogVisible: false,
        treeList: [{
            id: 1000001,
            lable: '一级权限',
            children: [{
                id: 1000011,
                lable: '二级权限',
                children: [{
                    id: 1000111,
                    lable: '三级权限'
                  },
                  {
                    id: 10001111,
                    lable: '三级权限'
                  },
                  {
                    id: 100011111,
                    lable: '三级权限'
                  },
                  {
                    id: 1000111111,
                    lable: '三级权限'
                  },
                  {
                    id: 10001111111,
                    lable: '三级权限'
                  },
                  {
                    id: 100011111111,
                    lable: '三级权限'
                  },
                ]
              },
              {
                id: 1000022,
                lable: '二级权限',
                children: [{
                    id: 10002222,
                    lable: '三级权限'
                  },
                  {
                    id: 100022222,
                    lable: '三级权限'
                  },
                  {
                    id: 1000222222,
                    lable: '三级权限'
                  },
                  {
                    id: 10002222222,
                    lable: '三级权限'
                  },
                  {
                    id: 100022222222,
                    lable: '三级权限'
                  },
                  {
                    id: 1000222222222,
                    lable: '三级权限'
                  },
                ]
              },
              {
                id: 100000333,
                lable: '二级权限',
                children: [{
                    id: 1000003333,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033331,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033332,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033334,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033336,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033337,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033330,
                    lable: '三级权限'
                  },
                ]
              },
            ]
          },
          {
            id: 1000001,
            lable: '一级权限',
            children: [{
                id: 1000011,
                lable: '二级权限',
                children: [{
                    id: 1000111,
                    lable: '三级权限'
                  },
                  {
                    id: 10001111,
                    lable: '三级权限'
                  },
                  {
                    id: 100011111,
                    lable: '三级权限'
                  },
                  {
                    id: 1000111111,
                    lable: '三级权限'
                  },
                  {
                    id: 10001111111,
                    lable: '三级权限'
                  },
                  {
                    id: 100011111111,
                    lable: '三级权限'
                  },
                ]
              },
              {
                id: 1000022,
                lable: '二级权限',
                children: [{
                    id: 10002222,
                    lable: '三级权限'
                  },
                  {
                    id: 100022222,
                    lable: '三级权限'
                  },
                  {
                    id: 1000222222,
                    lable: '三级权限'
                  },
                  {
                    id: 10002222222,
                    lable: '三级权限'
                  },
                  {
                    id: 100022222222,
                    lable: '三级权限'
                  },
                  {
                    id: 1000222222222,
                    lable: '三级权限'
                  },
                ]
              },
              {
                id: 100000333,
                lable: '二级权限',
                children: [{
                    id: 1000003333,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033331,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033332,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033334,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033336,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033337,
                    lable: '三级权限'
                  },
                  {
                    id: 10000033330,
                    lable: '三级权限'
                  },
                ]
              },
            ]
          }
        ],
        roleList: [{
            roleName: '超级管理员',
            roleDesc: '超级管理员拥有所有权限',
            children: [{
                id: 1000001,
                lable: '一级权限',
                children: [{
                    id: 1000011,
                    lable: '二级权限',
                    children: [{
                        id: 1000111,
                        lable: '三级权限'
                      },
                      {
                        id: 10001111,
                        lable: '三级权限'
                      },
                      {
                        id: 100011111,
                        lable: '三级权限'
                      },
                      {
                        id: 1000111111,
                        lable: '三级权限'
                      },
                      {
                        id: 10001111111,
                        lable: '三级权限'
                      },
                      {
                        id: 100011111111,
                        lable: '三级权限'
                      },
                    ]
                  },
                  {
                    id: 1000022,
                    lable: '二级权限',
                    children: [{
                        id: 10002222,
                        lable: '三级权限'
                      },
                      {
                        id: 100022222,
                        lable: '三级权限'
                      },
                      {
                        id: 1000222222,
                        lable: '三级权限'
                      },
                      {
                        id: 10002222222,
                        lable: '三级权限'
                      },
                      {
                        id: 100022222222,
                        lable: '三级权限'
                      },
                      {
                        id: 1000222222222,
                        lable: '三级权限'
                      },
                    ]
                  },
                  {
                    id: 100000333,
                    lable: '二级权限',
                    children: [{
                        id: 1000003333,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033331,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033332,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033334,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033336,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033337,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033330,
                        lable: '三级权限'
                      },
                    ]
                  },
                ]
              },
              {
                id: 1000001,
                lable: '一级权限',
                children: [{
                    id: 1000011,
                    lable: '二级权限',
                    children: [{
                        id: 1000111,
                        lable: '三级权限'
                      },
                      {
                        id: 10001111,
                        lable: '三级权限'
                      },
                      {
                        id: 100011111,
                        lable: '三级权限'
                      },
                      {
                        id: 1000111111,
                        lable: '三级权限'
                      },
                      {
                        id: 10001111111,
                        lable: '三级权限'
                      },
                      {
                        id: 100011111111,
                        lable: '三级权限'
                      },
                    ]
                  },
                  {
                    id: 1000022,
                    lable: '二级权限',
                    children: [{
                        id: 10002222,
                        lable: '三级权限'
                      },
                      {
                        id: 100022222,
                        lable: '三级权限'
                      },
                      {
                        id: 1000222222,
                        lable: '三级权限'
                      },
                      {
                        id: 10002222222,
                        lable: '三级权限'
                      },
                      {
                        id: 100022222222,
                        lable: '三级权限'
                      },
                      {
                        id: 1000222222222,
                        lable: '三级权限'
                      },
                    ]
                  },
                  {
                    id: 100000333,
                    lable: '二级权限',
                    children: [{
                        id: 1000003333,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033331,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033332,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033334,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033336,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033337,
                        lable: '三级权限'
                      },
                      {
                        id: 10000033330,
                        lable: '三级权限'
                      },
                    ]
                  },
                ]
              }
            ]
          },
          {
            roleName: '管理员',
            roleDesc: '管理员拥有部分权限',
            children: {
              id: 2,
              lable: '一级权限',
              children: {
                id: 2.2,
                lable: '二级权限',
                children: {
                  id: 2.3,
                  lable: '三级权限'
                }
              }
            }
          },
          {
            roleName: '普通用户',
            roleDesc: '普通用户拥有浏览权限',
            children: {
              id: 3,
              lable: '一级权限',
              children: {
                id: 3.2,
                lable: '二级权限',
                children: {
                  id: 3.3,
                  lable: '三级权限'
                }
              }
            }
          }
        ],
        treeProps: {
          children: 'children',
          lable: 'lable'
        },
      }
    },
    methods: {
      removeRights(role, rightsId) {
        this.$confirm('删除该权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      showSetRights() {
        this.setRightsDialogVisible = true
        console.log(this.treeList)
      }
    }
  }

</script>

<style lang="less" scoped>
  .box-card {
    margin-top: 20px;
  }

  .el-table {
    margin-top: 20px;
  }

  .el-tag {
    margin: 6px;
  }

  .bd-top {
    border-top: 1px solid #eee;
  }

  .bd-bottom {
    border-bottom: 1px solid #eee;
  }

  .el-row {
    display: flex;
    align-items: center;
  }

</style>
